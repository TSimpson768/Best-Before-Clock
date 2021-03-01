function HelloWorld(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Demo Settings</Text>}>
          <ColorSelect
            settingsKey="backgroundColour"
            colors={[
              {color: 'black'},
              {color: 'green'},
              {color: 'navy'},
              {color: 'orangered'},
              {color: 'lime'}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(HelloWorld);