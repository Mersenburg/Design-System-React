import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';




export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div 
            className={clsx(
                'flex itens center',
                'gap-3',
                'py-4',
                'px-3',
                'h-12',
                'bg-gray-800',
                'rounded',
                'focus-within:ring-2',
                'ring-cyan-300',
                'w-full',
                )}>
                {props.children}
                
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root';


export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className={clsx(
            'w-6',
            'h-6',
            'text-gray-400',
        )}>
            {props.children}

        </Slot>
    )

}
TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        
        
        
            <input className={clsx(
                'bg-transparent',
                'flex-1',
                'placeholder:text-gray-400',
                'text-gray-100',
                'text-xs',
                'w-full',
                'outline-none',
            )}
            {...props}/>
        

    )
}
TextInputInput.displayName = 'TextInput.Input';


export const Textinput = {
    Root: TextInputRoot,
    input: TextInputInput,
    Icon: TextInputIcon,

}