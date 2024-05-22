function MiddleColumn() {
    return (
        <div 
          className='inline-flex relative row-span-1 col-start-2 col-end-3 w-1.5 after:w-0.5 h-full after:h-middleScrollbarHeight after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:absolute after:left-1/2 after:hover:bg-smokey-grey after:rounded-lg' 
          /* onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          ref={scrollRef} */ 
        />
    )
}

export default MiddleColumn;