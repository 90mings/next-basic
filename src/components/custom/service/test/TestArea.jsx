import { Center, Input, Textarea } from '@chakra-ui/react';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import utils from '@/utils/index';
import ContentEditable from 'react-contenteditable';

const TestArea = forwardRef((props, ref) => {
  const {
    value,
    placeholder = '',
    color = '#000000',
    max = 999999,
    borderRadius = '40px',
    borderColor = '#00000080',
    fontWeight = 700,
    fontSize = '150px',
    border = '4px dashed',
    px = 4,
  } = props;

  const contentRef = useRef(null);

  useImperativeHandle(ref, () => ({
    handleClear,
  }));

  const { isDisabled = false, readOnly = false } = props;
  const { onChange, onKeyDown, onBlur } = props;
  const { textAlign = 'center', bg, type } = props;

  const { warningText, setWarningText } = props;

  const [tempBg, setTempBg] = useState('transparent');

  const [tempFontSize, setTempFontSize] = useState('');

  useEffect(() => {
    if (fontSize) {
      const temp = utils.getFontSize(fontSize);
      setTempFontSize(temp);
    }
  }, [fontSize]);

  const [html, setHtml] = useState('');

  useEffect(() => {
    if (html) {
      let content = '';
      if (warningText) {
        content = warningText;
      } else {
        const plainText = html.replace(/<[^>]*>/g, '');
        content = plainText;
      }
      setHtml(content);
    }
  }, [warningText]);

  const handleClear = () => {
    setHtml('');
  };

  const handleChange = (e) => {
    setHtml(e.target.value);
    if (onChange) {
      return onChange(e);
    }
  };

  const handleOnFocus = () => {
    console.log('handleOnFocus');
    if (setWarningText) {
      setWarningText('');
    }
  };

  return (
    <ContentEditable
      innerRef={contentRef}
      html={html}
      onFocus={handleOnFocus}
      onChange={handleChange}
      // onInput={handleInput}
      tagName="div"
      contentEditable
      suppressContentEditableWarning
      style={{
        border: border,
        borderColor: borderColor,
        padding: '10px',
        borderRadius: borderRadius,
        fontWeight: fontWeight,
        fontSize: tempFontSize,
        height: '100%',
        width: '100%',
        outline: 'none',
      }}
    />
  );
});

export default TestArea;
