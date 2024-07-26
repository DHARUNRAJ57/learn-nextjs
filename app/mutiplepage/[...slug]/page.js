export default function page({params}){
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>mutiple page names{params.slug[1]}</h1>
        </div>
    );
}