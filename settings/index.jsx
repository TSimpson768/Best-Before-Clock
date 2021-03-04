function HelloWorld(props) {
    return (
      <Page>
        <Section>
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
            label="Minimum Life (days)"
            settingsKey="dateOffset"
            type="number"
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(HelloWorld);