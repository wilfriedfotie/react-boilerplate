import React from 'react'
type TextAreaProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ children, ...props }, ref) => {
    return (
        <div className="flex flex-col space-y-5 w-[30vw]">


            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{children}</label>
            <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={ref} {...props}></textarea>

        </div>
    )
})

export default TextArea