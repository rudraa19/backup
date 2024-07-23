import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import CopyToClipboard from 'react-copy-to-clipboard';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyIcon, PasteIcon } from './Assets/Icons';
import { useContext, useEffect, useState } from 'react';

const Code = ({ children, language }) => {

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000);
        return () => clearTimeout(timer)
    }, [copied])

    return(
        <div className="code">
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
                <button className='icon copy-icon'>
                    {copied ? <PasteIcon /> : <CopyIcon /> }
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language={language}
                style={materialDark}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code