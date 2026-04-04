import React from "react";
import NewsTicker from "@/component/shared/NewsTicker";
import LoginForm from "@/component/auth/LoginForm";
import AuthFooter from "@/component/auth/AuthFooter";
import Image from "next/image";


export default function EditorialLoginPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf9f7] text-[#1b1c1b] flex flex-col font-sans">
      <style>
        {`
          .glass-panel {
            background: rgba(251, 249, 247, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(224, 191, 188, 0.2);
          }

          .editorial-gradient {
            background: linear-gradient(135deg, #73000c 0%, #98461e 50%, #fe9567 100%);
          }

          .headline-font {
            font-family: "Georgia", "Times New Roman", serif;
          }

          .label-font {
            font-family: Arial, Helvetica, sans-serif;
          }
        `}
      </style>

      <NewsTicker />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden p-6 sm:p-12">
        <div className="absolute inset-0 z-0">
          <div className="editorial-gradient absolute inset-0 opacity-10" />

          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkTSObodb7whJQzkFg9M18OsnTxnirhmILN0rATWgVUuHyKuoMDt_-c7TxE8Fk4sOeePXf243pi5nbKHsdrz1dod6i-fqv1yudy3hM6-wk9pCn9rE1p_iRPT-5FoPqx5jTN1vApikrY2wOJ-YsAfF5MwvjZyK8IFy3UTyeLt89f0zkXCVYhy0W1zN5OdTKSpws_eE4FxwPMtqnwZLp1g0MUO2gO6i8DD1jvGfh_rAasDVnDdbG0omY5o9Tjgx06UWtGLEmzP7N-OA"
            alt="Modern architectural background"
            fill
            className="h-full w-full object-cover opacity-30 mix-blend-overlay"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f7] via-transparent to-transparent" />
        </div>

        <LoginForm />
      </main>

      <AuthFooter />
    </div>
  );
}