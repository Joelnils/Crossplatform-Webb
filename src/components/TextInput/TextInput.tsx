const TextInput = (props) =>{
    const {placeholder, value,onInput} = props
    return(
        <input style={{marginBottom: '1rem'}} type="text" value={value}placeholder={placeholder} onInput={onInput} />
    )
}
export default TextInput;