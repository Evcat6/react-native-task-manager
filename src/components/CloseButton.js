import Icon from 'react-native-vector-icons/AntDesign';

const CloseButton = ({...props}) => {
   return <Icon name="close" size={22} color='#fff' {...props} />;
}

export default CloseButton;