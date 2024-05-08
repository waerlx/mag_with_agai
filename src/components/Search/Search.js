import React, { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const SpeechRecognition = () => {
  const [transcript, setTranscript] = useState('');
  
  const startRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
    };
    recognition.onerror = function (event) {
      console.error('Ошибка распознавания:', event.error);
    };
    recognition.start();
  };
  
  return (
    <div>


        
      <button id="startRecognitionButton" onClick={startRecognition}>
        Start Recognition
      </button>
      <div id="transcription">{transcript}</div>
    </div>
  );
};

const SearchOn = () => {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
      <SpeechRecognition />
    </Space>
  );
};

export default SearchOn;
