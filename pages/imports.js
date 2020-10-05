import React, { Component } from "react";
import { Page } from "../components/Page";
import { Button, ActionBar, List } from "fundamental-react";

class Imports extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Page>
                <Page.Content>
                    <ActionBar
                        actions={
                            <div>
                                <Button option="emphasized">Add new</Button>
                            </div>
                        }
                        title="Imports"
                    />
                    <List header="Settings">
                        <List.Item>
                            <List.Text>Checkout Cart</List.Text>
                            <List.Icon glyph="navigation-right-arrow" />
                        </List.Item>
                        <List.Item>
                            <List.Text>Profile Settings</List.Text>
                            <List.Icon glyph="navigation-right-arrow" />
                        </List.Item>
                        <List.Item>
                            <List.Text>Information</List.Text>
                            <List.Icon glyph="navigation-right-arrow" />
                        </List.Item>
                        <List.Item>
                            <List.Text>Order History</List.Text>
                            <List.Icon glyph="navigation-right-arrow" />
                        </List.Item>
                    </List>
                </Page.Content>
            </Page>
        );
    }
}

export default Imports;
