import './MyComponent.css';

type MyComponentProps = {
  label: string;
};

const MyComponent = ({ label }: MyComponentProps) => {
  return (
    <div>
      This is a button:
      <button className='my-component'>{label}</button>
    </div>
  );
};

export default MyComponent;
