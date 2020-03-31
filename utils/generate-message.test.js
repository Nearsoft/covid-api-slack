const generateMessage = require("./generate-message");

test("Should generate a message with the provided values", () => {
  const mockedData = { confirmed: 1, deaths: 15, recovered: 4 };

  const resultMessage = generateMessage(mockedData);

  expect(resultMessage).toEqual({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Today's statistics: \n\n _Confirmed_: 1 :face_with_thermometer: \n _Deaths_: 15 :skull: \n _Recovered_: 4 :pray:`,
        },
      },
    ],
  });
});
