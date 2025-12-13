"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NoDemoPage(){
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-8 sm:p-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-green-500/10 rounded-full border-2 border-green-500/30 mb-6"
          >
            <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-4">
            No Demo Available
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
            This project doesn&apos;t have a live demo available at the moment.
            You can check out the source code on GitHub to explore the implementation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="text-green-500 font-mono text-sm">&lt;</span>
          <span className="text-gray-500 font-mono text-sm">demo_not_found</span>
          <span className="text-green-500 font-mono text-sm">/&gt;</span>
        </div>
      </motion.div>
    </div>
  );
}