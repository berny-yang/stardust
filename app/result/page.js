"use client";
import { useRouter } from "next/navigation";

export default function Test(){

  const router = useRouter();

  return (
    <div style={{color:"#fff",background:"#000",height:"100vh"}}>
      <h2>当你面对未知：</h2>

      <button onClick={()=>router.push("/result")}>
        直接前行
      </button>
    </div>
  );
}
