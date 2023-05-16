import Link from "next/link";


const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <span className="link">Главная</span>
                </Link>
                <Link href="/about">
                    <span className="link">О нас</span>
                </Link>
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                    .navbar {
                        width: 1920px;
                        height: 80px;
                        background: #FFFFFF;
                        box-shadow: 0 4px 15px rgba(49, 60, 72, 0.05);
                    }
                    .link{
                        text-decoration: none;
                        font-family: 'Montserrat',sans-serif;
                        font-size: 18px;
                        margin: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default Index;