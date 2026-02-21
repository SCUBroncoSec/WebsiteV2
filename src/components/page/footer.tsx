const Footer = ({ children }: 
    { children?: React.ReactNode }) => {
    return (
        <div className="w-full pt-20 pb-10 relative z-20">
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal text-zinc-100">
{/* I made it support children, but there's no variataion so I put content back here */}
            Site theme and components by <a className="text-decoration: underline" href="https://github.com/tatertotbot" target="_blank" rel="noopener noreferrer">@tatertotbot</a>
            <br/>
            Site content and components by <a className="text-decoration: underline" href="https://github.com/ethansy878" target="_blank" rel="noopener noreferrer">@ethansy878</a>
            <br/>
            BroncoCTF content structure by <a className="text-decoration: underline" href="https://github.com/evanc517" target="_blank" rel="noopener noreferrer">@evanc517</a>
            <br/>
            Art by Anni L. '28
            <br/>
            1 - bronco&#123;h
                </p>
            </div>
        </div>
    )
}

export default Footer;