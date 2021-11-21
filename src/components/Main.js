import React, { Component } from "react";

import "./Week.css";

import Task from "./Task";
import Week from "./Week";

import { Card } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.stats = 1000;
    this.cs202 = 1000;
    this.cs240 = 1000;
    this.music = 1000;
  }

  state = {
    r: 255,
    g: 0,
    b: 0,
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thurs: [],
    fri: [],
    sat: [],
    tasks: [
      {
        title: 'Fetching Data...',
          dueDate: '2021-11-02T05:59:00Z',
          points: 5,
          weight: '1.42',
          class: 'STATS 121',
          link: 'https://byu.instructure.com/courses/11196/assignments/454902'
      },
    ],
  };
  componentDidMount() {
    window.addEventListener("focus", this.onFocus);
  }

  componentWillUnmount() {
    window.removeEventListener("focus", this.onFocus);
  }
  onFocus = () => {
    console.log("fetching canvas data!");
    this.setState({
      sun: [
        {
          id: 1,
          title: "Fetching data...",
          done: false,
          dueDate: "2021-11-01T05:59:00Z",
        },
      ],
      mon: [
        {
          id: 1,
          title: "Fetching data...",
          done: false,
          dueDate: "2021-11-01T05:59:00Z",
        },
      ],
      tue: [
        {
          id: 1,
          title: "Fetching data...",
          done: false,
          dueDate: "2021-11-01T05:59:00Z",
        },
      ],
      wed: [
        {
          id: 1,
          title: "Fetching data...",
          done: false,
          dueDate: "2021-11-01T05:59:00Z",
        },
      ],
      thurs: [
        {
          id: 1,
          title: "Fetching data...",
          done: false,
          dueDate: "2021-11-01T05:59:00Z",
        },
      ],
      fri: [
        {
          id: 1,
          title: "Fetching data...",
          done: false,
          dueDate: "2021-11-01T05:59:00Z",
        },
      ],
      sat: [
        {
          id: 1,
          title: "Fetching data...",
          done: false,
          dueDate: "2021-11-01T05:59:00Z",
        },
      ],
      tasks: [
        {
          title: 'Evil Hangman Assignment (Pass Off)',
          dueDate: '2021-09-22T02:00:00Z',
          points: 100,
          weight: '99.01',
          class: 'CS 240',
          link: 'https://byu.instructure.com/courses/12737/assignments/491206'
        },
        {
          title: 'UML Overview and Class Diagrams Lab',
          dueDate: '2021-09-25T05:59:59Z',
          points: 10,
          weight: '14.71',
          class: 'CS 202',
          link: 'https://byu.instructure.com/courses/11349/assignments/472463'
        },
        {
          title: 'Module 4 Quiz: UML Overview and Class Diagrams ',
          dueDate: '2021-09-25T05:59:00Z',
          points: 5,
          weight: '7.35',
          class: 'CS 202',
          link: 'https://byu.instructure.com/courses/11349/assignments/472447'
        },
        {
          title: 'Week 4 Discussion Board--EDA for Quantitative Variables (Lessons 7-9)',
          dueDate: '2021-09-25T05:59:00Z',
          points: 15,
          weight: '4.27',
          class: 'STAT 121',
          link: 'https://byu.instructure.com/courses/11196/assignments/455692'
        },
        {
          title: 'Module 4: Engagement Report',
          dueDate: '2021-09-25T05:59:59Z',
          points: 2,
          weight: '2.94',
          class: 'CS 202',
          link: 'https://byu.instructure.com/courses/11349/assignments/472443'
        },
        {
          title: 'Credit Quiz 9A - R',
          dueDate: '2021-09-23T05:59:00Z',
          points: 10,
          weight: '2.85',
          class: 'STAT 121',
          link: 'https://byu.instructure.com/courses/11196/assignments/454916'
        },
        {
          title: 'Lessons 6-8 Lab Activity',
          dueDate: '2021-09-25T05:59:00Z',
          points: 10,
          weight: '2.85',
          class: 'STAT 121',
          link: 'https://byu.instructure.com/courses/11196/assignments/455697'
        },
        {
          title: 'Credit Quiz 10A',
          dueDate: '2021-09-25T05:59:00Z',
          points: 10,
          weight: '2.85',
          class: 'STAT 121',
          link: 'https://byu.instructure.com/courses/11196/assignments/458753'
        },
        {
          title: 'Credit Quiz 11A',
          dueDate: '2021-09-28T05:59:00Z',
          points: 10,
          weight: '2.85',
          class: 'STAT 121',
          link: 'https://byu.instructure.com/courses/11196/assignments/458779'
        },
        {
          title: 'Week 5 Announcement Quiz',
          dueDate: '2021-09-28T05:59:00Z',
          points: 5,
          weight: '1.42',
          class: 'STAT 121',
          link: 'https://byu.instructure.com/courses/11196/assignments/454931'
        },
        {
          title: 'Programming Exam Note Sheet',
          dueDate: '2021-09-24T19:00:00Z',
          points: 0,
          weight: '0.00',
          class: 'CS 240',
          link: 'https://byu.instructure.com/courses/12737/assignments/491217'
        },
        {
          title: 'Official Programming Exam (Proctored)',
          dueDate: '2021-09-24T23:00:00Z',
          points: 0,
          weight: '0.00',
          class: 'CS 240',
          link: 'https://byu.instructure.com/courses/12737/assignments/491189'
        }
      ],
    });
    console.log(this.state.tasks);

    const sun = [];
    const mon = [];
    const tue = [];
    const wed = [];
    const thurs = [];
    const fri = [];
    const sat = [];

    this.state.tasks.forEach((task) => {
      const date = Date.parse(task.dueDate);
      const obj = new Date(date);
      const day = obj.getDay();

      switch (day) {
        case 0: //Monday
          mon.push(task);
          break;
        case 1:
          tue.push(task);
          break;
        case 2:
          wed.push(task);
          break;
        case 3:
          thurs.push(task);
          break;
        case 4:
          fri.push(task);
          break;
        case 5:
          sat.push(task);
          break;
        case 6:
          sun.push(task);
          break;
      }
    });


    this.setState({
      sun: sun,
      mon: mon,
      tue: tue,
      wed: wed,
      thurs: thurs,
      fri: fri,
      sat: sat,
      tasks: this.state.tasks,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div style={{display: "block", backgroundColor: "#282c34"}}>
        <div style={{maxWidth: "1900px", alignItems:"center"}}>
          <Card style={{textAlign:"center"}} style={{backgroundColor: "#282c34", borderRaidus: "25px"}}>
            <Card.Body>
              <div className="tasks-container"
              style={{maxHeight:"50vh", overflowY:"auto", backgroundColor: "#3d4148"}}>
                {this.state.tasks.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </div>
            </Card.Body>
          </Card>
        <div>
          <Card style={{backgroundColor: "#282c34"}}>
            <Card.Body>
              <Week tasks={this.state} />
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
    );
  }
}
