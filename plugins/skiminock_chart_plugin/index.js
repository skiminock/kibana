
export default function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      app: {
        title: 'My Chart Plugin',
        description: 'Ooh La La',
        main: 'plugins/skiminock_chart_plugin/app'
      },
      hacks: [
        'plugins/skiminock_chart_plugin/hack'
      ]
    }
  });
}