import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InlineCode = ({ children, isCode }) => {
    if(isCode){
        return(
            <span style={{ backgroundColor: '#302c2c', border: 'solid 1px #495057',padding: '0px 5px', borderRadius: '2px' }}>
                {children}
            </span>
        )
    }
    else{
        return(
            <span>{children}</span>
        )
    }
}

export default InlineCode