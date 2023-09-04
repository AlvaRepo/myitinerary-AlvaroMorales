
export default function Footer() {
    return (
        <div className="flex px-24 bg-gray-200">
            <div className="w-1/2 p-4">
                <ul className="list-disc">
                    <li>
                        Facebook 
                    </li>
                    <li>
                        Twitter
                    </li>
                    <li>
                        Instagram
                    </li>
                    </ul>
            </div>
            <div className="w-1/2 p-4">
                <p className="text-center">
                &copy; {new Date().getFullYear()} Todos los derechos reservados
                </p>
            </div>
        </div>
    );
}
