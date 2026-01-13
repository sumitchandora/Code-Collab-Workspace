"use client";

import { useEffect, useState } from "react";
import { onSnapshot, doc, updateDoc, arrayRemove, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { set } from "firebase/database";

const InviteNotification = () => {
    const { user } = useAuth();
    const [invites, setInvites] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (!user) return;

        const userRef = doc(db, "users", user.uid);
        const unsubscribe = onSnapshot(userRef, (docSnap) => {
            if (docSnap.exists()) {
                setInvites(docSnap.data().invites || []);
            }
        });

        return () => unsubscribe();
    }, [user]);

    const handleAcceptInvite = async (workspaceId) => {
        if (!user) return;

        try {
            const membersRef = doc(db, `workspaces/${workspaceId}/members`, user.uid);
            await setDoc(membersRef, {
                userId: user.uid,
                role: "contributor",
                displayName: user.displayName || "Unknown",
                photoURL: user.photoURL || "/robotic.png",
            });

            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, {
                invites: arrayRemove(workspaceId),
            });

            setInvites((prev) => prev.filter((id) => id !== workspaceId));
            toast.success("You have joined the workspace!");
            router.push("/workspace/" + workspaceId);
        } catch (error) {
            console.error("Error accepting invite:", error);
        }
    };

    const handleDeleteInvite = async (workspaceId) => {
        if (!user) return;

        try {
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, {
                invites: arrayRemove(workspaceId),
            });

            setInvites((prev) => prev.filter((id) => id !== workspaceId));
            toast.info("Invite declined.");
        } catch (error) {
            console.error("Error deleting invite:", error);
        }
    };

    return (
        <div className="fixed top-[30px] right-5 space-y-3 !z-[999999]">
            <AnimatePresence>
                {invites.map((workspaceId) => (
                    <motion.div
                        key={workspaceId}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative"
                    >
                        <div className="w-96 shadow-xl  bg-slate-300 ring-2 ring-green-500 rounded-xl backdrop-blur-sm">
                            <CardHeader className="p-4 pb-2">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-lg font-semibold text-black">
                                        Workspace Invite
                                    </CardTitle>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setInvites((prev) => prev.filter((id) => id !== workspaceId))}
                                        className="text-gray-700 hover:text-white transition-colors"
                                    >
                                        <X size={20} strokeWidth={2} />
                                    </motion.button>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-gray-700 text-sm mb-4">
                                    You've been invited to join:
                                    <span className="block font-mono text-blue-400 mt-1 truncate">
                    {workspaceId}
                  </span>
                                </p>
                                <div className="flex justify-end gap-3">
                                    <Button
                                        onClick={() => handleDeleteInvite(workspaceId)}
                                        className="bg-red-500 hover:bg-red-700 text-red-100 border border-red-400/30 hover:border-red-400/50 rounded-lg px-4 py-2 transition-all"
                                    >
                                        Decline
                                    </Button>
                                    <Button
                                        onClick={() => handleAcceptInvite(workspaceId)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                                    >
                                        Accept
                                    </Button>
                                </div>
                            </CardContent>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default InviteNotification;