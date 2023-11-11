'use client'
import '@styles/globals.css';
import React, {useEffect, useState} from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai'; // Choose your preferred theme

import 'ace-builds/src-noconflict/ext-language_tools'; // Import language tools extension

const customCompleter = {
    getCompletions(editor: any, session: any, pos: any, prefix: any, callback: any) {
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
    },
};

export function Editor({Textx1}: {Textx1: String}) {
    const Tetx1 = `
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

            if(index === Tetx1.length - 1) {
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
        <div className='bg-slate-800 px-3 py-3 rounded-xl'>
            <AceEditor
                mode="python"
                theme="dracula"
                onChange={handleChange}
                highlightActiveLine={false}
                fontSize={'14px'}
                width='680'
                height='650'
                style={{
                    overflow: 'hidden'
                }}
                value={text_1}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                onLoad={editor => {
                    editor.completers = [customCompleter];
                }}
            />
        </div>
    );
}


