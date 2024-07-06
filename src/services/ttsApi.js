import axios from 'axios';

const fetchTTS = async (text, { speed, pitch, gender, name }) => {
  const param = {
    input: { text },
    voice: {
      languageCode: 'ko-KR',
      ssmlGender: gender || undefined, // 성별 (SSML_VOICE_GENDER_UNSPECIFIED(성별 불특정?), MALE,FEMALE, NEUTRAL (성중립) )
      name: name || undefined,
      // name
    },
    audioConfig: {
      // audioEncoding: 'MP3',
      audioEncoding: 'LINEAR16',
      speakingRate: speed, // 0.25 < 4.0
      volumeGainDb: 0, // -96.0, 16.0
      pitch: pitch, // -20.0, 20.0
      // 모음: 우, 오 -3 값으로 좀 헷갈림
    },
  };
  console.log('tts param: ', param);
  const response = await axios.post(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    param,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (response.status === 200) {
    const audioUrl = 'data:audio/mp3;base64,' + response.data.audioContent;
    return audioUrl;
  } else {
    return null;
  }
};

export default {
  fetchTTS,
};
