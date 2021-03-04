function HelloWorld(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Demo Settings</Text>}>
            <Text>Background Colour</Text>
          <ColorSelect
            label="Background Colour"
            settingsKey="backgroundColour"
            colors={[
              {color: 'black'},
              {color: 'green'},
              {color: 'navy'},
              {color: 'orangered'},
              {color: 'lime'}
            ]}
          />

          <TextInput
            label="Target date"
            settingsKey="dateOffset"
            type="number"
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(HelloWorld);