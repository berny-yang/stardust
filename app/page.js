export default function Home(){
  return (
    <div style={{
      height:"100vh",
      background:"#000",
      color:"#fff",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    }}>
      <h1>你不是一个人类</h1>
      <p>你是一种宇宙结构</p>

      <a href="/test">
        <button style={{marginTop:20}}>开始测定</button>
      </a>
    </div>
  );
}
