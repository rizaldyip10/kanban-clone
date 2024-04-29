import KanbanBoard from "./components/kanban-board-component"
import avatar1 from './assets/Avatar.png'
import avatar2 from './assets/Avatar (1).png'

const weeklyList = [
  {
      labelTitle: 'Last Week',
      color: 'gray',
      task: [
          {
              title: 'Review scope',
              description: 'Review #390',
              note: {
                  description: 'Due 9/11',
                  variant: 'red'
              }
          },
          {
              title: 'Team retro',
              list: [
                  {
                      listName: 'Schedule time',
                      desc: 'Done'
                  },
                  {
                      listName: 'Set up Figma Board',
                      desc: 'Ongoing'
                  },
              ]
          }
      ]

  },
  {
      labelTitle: 'This Week',
      color: 'purple',
      task: [
          {
              title: 'Usability Test',
              userList: [
                  {
                      imgURL: avatar1
                  },
                  {
                      imgURL: avatar2
                  }
              ],
              description: 'Research question with Carina',
              note: {
                  description: 'Research',
                  variant: 'green'
              }
          }
      ]
  },
  {
      labelTitle: 'Next Week',
      color: 'red',
      task: [
          {
              title: 'Culture workshop',
              description: "Let's built a great team",
              list: [
                  {
                      listName: 'Schedule time',
                      desc: 'Done'
                  },
                  {
                      listName: 'Set up Figma board',
                      desc: 'Ongoing'
                  },
                  {
                      listName: 'Review exercise with team',
                      desc: 'Ongoing'
                  }
              ],
              userList: [
                  {
                      imgURL: avatar2
                  }
              ],
              note: {
                  description: 'Due 24/11',
                  variant: 'red'
              }
          }
      ]
  }
]

const personalList = [
  {
    labelTitle: 'Not Started',
    color: 'gray',
    task: [
      {
        title: 'Take Coco to a vet',
        note: {
          description: 'Due 4/11',
          variant: 'red'
        }
      }
    ]
  },
  {
    labelTitle: 'In progress',
    color: 'purple',
    task: [
      {
        title: 'Taxes 😔',
        list: [
          {
            listName: 'Accountant contract',
            desc: 'Ongoing'
          },
          {
            listName: 'Request work payslips',
            desc: 'Ongoing'
          },
          {
            listName: 'Cancel VAT ID',
            desc: 'Ongoing'
          },
        ]
      }
    ]
  },
  {
    labelTitle: 'Blocked',
    color: 'red',
    task: [
      {
        title: 'Move',
        description: 'Survive moving place in the pandemic',
        list: [
          {
            listName: 'Request moving estimate',
            desc: 'Ongoing'
          },
          {
            listName: 'Order moving boxes',
            desc: 'Done'
          },
        ],
        userList: [
          {
              imgURL: avatar2
          }
      ],
      }
    ]
  },
  {
    labelTitle: 'Done',
    color: 'green',
    task: [
      {
        title: 'Nothing to be done 🙃'
      }
    ]
  }
]

function App() {

  return (
    <div className="h-screen bg-white flex flex-col p-10">

      <div className="w-full flex flex-col gap-2 font-sf-pro">
        <h1 className="text-3xl font-bold font-sf-compact">Design Weekly</h1>
        <p className='text-sm text-gray-500'>A board to keep track of design of design process</p>
      </div>

      <div className="w-full mt-6">
        <KanbanBoard list={weeklyList} />
      </div>

      <div className="w-full flex flex-col gap-2 font-sf-pro mt-10">
        <h1 className="text-3xl font-bold font-sf-compact">Personal</h1>
        <p className='text-sm text-gray-500'>A board to keep personal track</p>
      </div>

      <div className="w-full mt-6 pb-10">
        <KanbanBoard list={personalList} />
      </div>

    </div>
  )
}

export default App
