import { ReactNode, FC, useState, useEffect, createContext } from "react"
import classnames from "classnames"
import { createPortal } from 'react-dom';

interface ToastContext {
  open: boolean;
  toggle: () => void;
}

const ToastContext = createContext<ToastContext>({
  open: false,
  toggle: () => {},
})

interface ToastProps {
  children: ReactNode;
  className?: string;
  color?: string;
  title: string;
  [key: string]: any;
}

const Toast: FC<ToastProps> = ({children, className, color, title, ...rest}) => {
  

  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen(prevOpen => !prevOpen)
  }

  useEffect(() => {
    const target = document.querySelector(".general-toast-container")
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
       toggle()
      } 
    }, {
       threshold: 1.0
    });
    observer.observe(target);
    return () => {
      observer.disconnect();
    }
  }, []);

  const colorClass = color && `toast-${color}`
  const allClasses = classnames(colorClass, className)
    return (
      
    <div className="toast-individual-container">
    {createPortal(

    <ToastContext.Provider value={{open, toggle}}>
        { open && (
    <div className={allClasses} {...rest}>
    <div className={`toast-icon-${color}`}>
                </div>
        <div className={`toast-title-${color}`}>
            {title}
        </div>
        <p className={`toast-text-${color}`}>
      {children}
        </p>
      </div>
        )}
    </ToastContext.Provider>,
        document.body
      )}
    </div>
    )
  };
  
  export default Toast; 

  export { ToastContext }
  