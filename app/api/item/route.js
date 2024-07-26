export async function GET(req){ 
  const type = req.nextUrl.searchParams.get('type');
  console.log(type);
return  new Response("Hello World");
}

export async function POST(){
    return new  Response.json([{menubar: "world"}]);
}