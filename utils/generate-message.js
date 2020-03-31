const generateMessage = ({ confirmed, deaths, recovered }) => {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Today's statistics: \n\n _Confirmed_: ${confirmed} :face_with_thermometer: \n _Deaths_: ${deaths} :skull: \n _Recovered_: ${recovered} :pray:`,
        },
      },
    ],
  };
};

module.exports = generateMessage;
