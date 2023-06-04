
import { Typography } from 'antd';
import { useMemo, useState } from 'react';
const { Paragraph } = Typography;
const App = () => {
//   const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [editableStrWithSuffix] = useState(
    'This is a loooooooooooooooooooooooooooooooong editable text with suffix.',
  );
  const [] = useMemo(
    () => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)],
    [editableStrWithSuffix],
  );

  const [chooseTrigger] = useState(['icon']);
  const [] = useState(
    'Editable text with a custom enter icon in edit field.',
  );

  const stateToRadio = useMemo(() => {
    if (chooseTrigger.includes('text')) {
      return chooseTrigger.includes('icon') ? 'both' : 'text';
    }
    return 'icon';
  }, [chooseTrigger]);
  return (
    <>
      <Paragraph copyable>This is a copyable text.</Paragraph>
    </>
  );
};
export default App;