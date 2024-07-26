export default function page({params}){
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Blog name {params.slug}</h1>
        </div>
    );
} 