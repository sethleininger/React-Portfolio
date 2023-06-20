import React from "react";

export default function Footer() {
    return (
        <footer className="footer"> 
        <div className="content has-text-centered">
            <p>
                <strong>My Full Stack Development Portfolio</strong> a react Site by{" "}
                <a 
                href="https://github.com/sethleininger" target="_blank" rel="noreferrer">
                    Seth William Leininger
                </a>
                .
                <hr />
                <a
                href="https://www.linkedin.com/in/seth-leininger-983637189/"
                target="_blank" rel="noreferrer"
                >
                    LinkedIn
                </a>{" "}
                {/* |{" "}{" "} */}
            </p>
        </div>
        </footer>
    )
}