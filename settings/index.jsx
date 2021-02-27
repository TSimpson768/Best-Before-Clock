function settingsPage(props){
    return(
            <page>

                <ColorSelect
                    settingsKey = "backgroundColour"
                    colors={[
                        {color: 'black'},
                        {color: 'green'}
                    ]}
                />
                
            </page>
    );

}

registerSettingsPage(settingsPage);