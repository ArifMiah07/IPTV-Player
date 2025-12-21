import { motion } from "motion/react";
const TestingUrlLoadingSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <motion.div
        className="bg-gray-300 w-1/2 h-6 rounded"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="bg-gray-300 w-3/4 h-4 rounded"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="bg-gray-300 w-2/3 h-4 rounded"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      />
      <motion.div
        className="bg-gray-300 w-full h-4 rounded"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
      />
    </div>
  );
};

export default TestingUrlLoadingSkeleton;
