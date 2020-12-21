import styled from 'styled-components/native';
import {ReactButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  width: 40px;
  height: 50px;
  background-color: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;
