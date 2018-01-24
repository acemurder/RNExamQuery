import React, {Component} from 'react';
import {
    View,
    Text,
    AppRegistry,
    ListView,
    StyleSheet
} from 'react-native';

import {
    listViewBack, row, separator, nameContainer, gradeContainer, typeContainer, nameText, gradeText, typeText
} from "./style/ExamScheduleStyle";

function _renderRow(exam) {
    return (
        <View style={row}>
            <View style={nameContainer}>
                <Text style={nameText}>{exam.course}</Text>
            </View>
            <View style={gradeContainer}>
                <Text tyle={gradeText}>{exam.grade}</Text>
            </View>
            <View style={typeContainer}>
                <Text tyle={typeText}>{exam.property}</Text>
            </View>

        </View>
    );
}

const REQUEST_URL = "http://hongyan.cqupt.edu.cn/api/examGrade"


function _renderSeparator(sectionId, rowId) {
    return (
        <View
            style={separator}
            key={sectionId + rowId}>
        </View>
    );
}

export default class ExamScheduleView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (i1, i2) => i1 !== i2})
        };

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let formData = new FormData();
        formData.append("stuNum", "2015211876");

        fetch(REQUEST_URL, {
            method: 'POST',
            body: "stuNum=2015211876",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error) => {
                console.error(error)
            }).done();
    }

    render() {
        return (
            <View>
                <ListView
                    style={listViewBack}
                    dataSource={this.state.dataSource}
                    renderRow={_renderRow}
                    renderSeparator={_renderSeparator}

                />
            </View>
        );
    }
}

