export default function Button({style,inverted,icon,children}){
    let classesBuffer = ''

    switch(style){
        case "text-link": classesBuffer += 'border-primary ';break;
        default: classesBuffer += 'border-white ';break;
    }

    switch(color){
        case "primary": classesBuffer += 'border-primary ';break;
        case "secondary": classesBuffer += 'border-secondary ';break;
        default: classesBuffer += 'border-white ';break;
    }

    switch(color){
        case "primary": classesBuffer += 'border-primary ';break;
        case "secondary": classesBuffer += 'border-secondary ';break;
        default: classesBuffer += 'border-white ';break;
    }

    switch(position){
        case "bottom": classesBuffer += 'border-b-4 ';break;
        default: classesBuffer += 'pl-4 border-l-4 ';break;
    }

    return(
        <button className={`border-solid ${classesBuffer}`}>
            {children}
        </button>
    )
}