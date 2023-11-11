'use client'
import '@/styles/globals.css';
import React, {useEffect, useState} from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai'; // Choose your preferred theme

import 'ace-builds/src-noconflict/ext-language_tools'; // Import language tools extension

export function CodeSample({text, width, name}: {text: string, width: string, name?: string}) {
    return <div>
        <div>
            <div className='flex  bg-slate-800 w-[800px] bg-zinc-8400 py-1 px-1 rounded-md'>
                <AceEditor
                    mode="python"
                    theme="dracula"

                    highlightActiveLine={false}
                    showGutter={false}
                    showPrintMargin={false}
                    fontSize={'14px'}
                    readOnly={true}

                    style={{
                        overflow: 'hidden',
                        width: '800px',
                        height: `${text.split('\n').length * 2}em`

                    }}
                    name='Engpy'
                    value={text}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    editorProps={{$blockScrolling: true, }}
                // setOptions={{
                //     enableBasicAutocompletion: true,
                //     enableLiveAutocompletion: true,
                //     enableSnippets: false,
                //     getCompletions,
                // }}
                />
            </div>
        </div>
    </div >

}

export const CodeEditor: React.FC<{text?: string}> = ({text}) => {
    const Tetx1 = text ? text : `
from engpy import Expr

def partial_fraction_decomposition(expr_str):

    expr = Expr(expr_str)
    if not expr.isnum():
        raise ValueError(
            "expression must be a rational function."
            )

    denominator_factors = expr.deno().factors()
    partial_fractions = []

    for factor, multiplicity in denominator_factors:
        for _ in range(multiplicity):

            term = exprs / (factor ** (_ + 1))
            coefficients = list(term.solve())

            # Handle different types of coefficients
            if isinstance(coefficients, int) or isinstance(coefficients, float):
                partial_fractions.append((factor, coefficients))

            elif isinstance(coefficients, list):
                partial_fractions.append((factor, coefficients))

            elif isinstance(coefficients, dict):
                for key, value in coefficients.items():
                    partial_fractions.append((factor * key, value))

    return partial_fractions
if __name__ == main:
    print(partial_fraction_decomposition('1/(x^2 + 3x + 2)'))
`.split(' ')
    const [text_1, setTetx_1] = useState("");
    const [index, setIndex] = useState(0);
    const [onwait, setOnwait] = useState(true);
    const [content, setContent] = useState('');
    const getCompletions = (
        editor: AceAjax.Editor,
        session: AceAjax.IEditSession,
        pos: AceAjax.Position,
        prefix: string,
        callback: (error: any, completions?: AceAjax.Completion[]) => void
    ) => {
        const completions = [
            {value: 'console.log()', score: 100, meta: 'method'},
            {value: 'if', score: 90, meta: 'keyword'},
            {value: 'for', score: 90, meta: 'keyword'},
            {value: 'while', score: 90, meta: 'keyword'},
            {value: 'function', score: 90, meta: 'keyword'},
            {value: 'var', score: 90, meta: 'keyword'},
            // More autocomplete suggestions...
        ];
        callback(null, completions);
    };
    const handleChange = () => {
        const str = "let x = 5;"
        setContent(content)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(onwait && index < Tetx1.length) {
                setTetx_1((prevText) => (prevText + (prevText.length ? ' ' : '') + Tetx1[index]));
                setIndex((prevIndex) => prevIndex + 1);
            }

            if(index === Tetx1?.length - 1) {
                setOnwait(false);
                const timeout = setTimeout(() => {
                    setOnwait(true);
                    setTetx_1("");
                    setIndex(0);
                }, 1000);

                return () => {
                    clearTimeout(timeout);
                };
            }
        }, 80);

        return () => {
            clearInterval(interval);
        };
    }, [index, onwait]);

    return (
        <div>
            <div className='flex sm:hidden bg-slate-800 px-3 py-3 rounded-xl'>
                <AceEditor
                    mode="python"
                    theme="dracula"
                    onChange={handleChange}
                    highlightActiveLine={false}
                    fontSize={'14px'}
                    style={{


                    }}
                    value={text_1}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    editorProps={{$blockScrolling: true}}
                />
            </div>
            <div className='hidden sm:flex  bg-slate-800 px-3 py-3 rounded-xl'>
                <AceEditor
                    mode="python"
                    theme="dracula"
                    onChange={handleChange}
                    highlightActiveLine={false}
                    fontSize={'14px'}
                    style={{
                        overflow: 'hidden',
                        width: '500px',

                    }}
                    value={text_1}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    editorProps={{$blockScrolling: true}}
                // setOptions={{
                //     enableBasicAutocompletion: true,
                //     enableLiveAutocompletion: true,
                //     enableSnippets: false,
                //     getCompletions,
                // }}
                />
            </div>
        </div >

    );
}


