"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, AnimatePresence, stagger } from "framer-motion";
import { Code, Users, Sparkles, GitBranch } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomePage() {
    const features = [
        { icon: <Users />, title: "Real-time Collaboration", description: "Work together seamlessly with live code editing and live cursor support.", titleColor: "text-green-400" },
        { icon: <Sparkles />, title: "AI-driven Tools", description: "Get intelligent code suggestions instantly with comprehensive documentation.", titleColor: "text-yellow-400" },
        { icon: <Code />, title: "Smart Linting", description: "Identify and fix syntax errors effortlessly as you type with smart AI suggestions.", titleColor: "text-red-400" },
        { icon: <GitBranch />, title: "Real-time Chatbot Support", description: "Integrated AI chat bot for instant help and guidance.", titleColor: "text-purple-400" },
    ];

    const testimonialRef = useRef(null);
    const isInView = useInView(testimonialRef, { once: true, margin: "-100px" });

    return (
        <div className="min-h-screen background-animated">
            {/* Hero Section */}
            <section className="text-center py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        AI-Powered Code Editor
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Write, collaborate, and debug with AI-assisted coding in real-time.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="button-animated"
                            onClick={() => window.location.href = "/register"}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="px-10 py-12">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Code Editor Preview */}
            <section className="flex justify-center items-center py-16 px-6">
                <motion.div
                    className="w-full max-w-4xl bg-gray-900 rounded-xl shadow-2xl p-8 border border-purple-800 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div className="flex gap-2 mb-6">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <motion.div
                        className="font-mono space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-blue-400 flex items-center">
                            <span className="text-purple-400">function</span>
                            <span className="mx-2">welcome()</span>{" "}
                            <span className="ml-2 text-gray-500">{'{'}</span>
                        </p>
                        <p className="text-green-400 ml-4 flex items-center">
                            <span className="text-yellow-400">console</span>
                            <span className="mx-2 text-white">.</span>
                            <span className="text-blue-400">log</span>
                            <span className="mx-2 text-white">(</span>
                            <span className="text-green-300">"✨ Welcome to the Developer's Workspace ✨"</span>
                            <span className="text-white">)</span>
                            <span className="ml-2 animate-pulse">|</span>
                        </p>
                        <p className="text-blue-400">{'}'}</p>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
function FeatureCard({ icon, title, description }) {
    return (
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900  p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-purple-800 hover:border-pink-500 transition-all group min-w-[250px] h-[250px]">
                <CardContent className="text-center flex flex-col justify-between items-center h-full">
                    <motion.div
                        className="text-4xl text-purple-300 transition-all"
                        animate={{ scale: [1, 1.1, 1], color: ["#d4b5ff", "#ff79c6", "#d4b5ff"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-purple-200 group-hover:text-pink-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-all">
                        {description}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
}

function Testimonial({ name, feedback, animationDelay }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: animationDelay, duration: 0.5 }}
        >
            <Card className="bg-gray-900 p-6 rounded-xl shadow-lg border border-purple-800 hover:border-pink-500 transition-colors">
                <CardContent className="relative">
                    <div className="absolute top-0 left-0 text-6xl text-gray-700 opacity-50">“</div>
                    <p className="italic text-gray-300 pt-8 px-4">{feedback}</p>
                    <p className="text-blue-400 mt-4 font-medium">- {name}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}