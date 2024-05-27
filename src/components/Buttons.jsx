import { styled } from  'styled-components'

const CustomButton = styled.button`
padding: 1rem 2rem;
font-weight: 600;
text-transform: uppercase;
border-radius: 0.25rem;
color: #1f2937;
background-color: #f0b322;
border-radius: 6px;
border: none;
`

export default function Button ({children, ...props}) {
    return <CustomButton {...props}>
        {children}
    </CustomButton>
}
