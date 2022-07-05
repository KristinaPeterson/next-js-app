export default function Home({ message }) {
    return (
        <div>
            <h1>This is Home Page</h1>
            <h2>{message}</h2>
        </div>
    );
}
    
export function getServerSideProps() {
    return {
        notFound: true
    };
}
