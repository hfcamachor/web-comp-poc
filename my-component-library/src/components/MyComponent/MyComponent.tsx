import './MyComponent.css';

type MyComponentProps = {
  label: string;
  theme?: 'light' | 'dark'; 
};

const MyComponent = ({ label, theme = 'light' }: MyComponentProps) => {
  return (
    <div data-theme={theme}>
      This is web component a button:
      <button className='my-component'>{label}</button>
    </div>
  );
};

export default MyComponent;
