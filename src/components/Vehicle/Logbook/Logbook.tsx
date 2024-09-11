import React, { useContext, useEffect, useState } from 'react';
import './Logbook.css';
import { Button, Input, Table } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { StateManager } from '../..';
import { ipcRenderer } from 'electron';
import { asyncSql } from '../../../renderer';
type Props = {};

type logbookEntry = {
  startDate: number;
  endDate: number;
  purpose: string;
  startOdometer: number;
  endOdometer: number;
  business: boolean;
};
// const electron = window.require('electron');
// const { ipcRenderer } = electron;

const Logbook = (props: Props) => {
  const [message, setMessage] = useState('SELECT sqlite_version()');
  const [response, setResponse] = useState();
  function send(sql: string) {
    asyncSql(sql).then((result) => setResponse(result));
  }

  const state = useContext(StateManager);
  console.log(state.get());
  useEffect(() => {
    send('hello from logbook');
  });
  console.log(response);
  return (
    <div>
      <Table compact size="small" celled collapsing>
        <Table.Header>
          <Table.HeaderCell>Start Date</Table.HeaderCell>

          <Table.HeaderCell>End Date</Table.HeaderCell>
          <Table.HeaderCell>Purpose</Table.HeaderCell>
          <Table.HeaderCell>Start Odometer</Table.HeaderCell>
          <Table.HeaderCell>End Odometer</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Distance</Table.HeaderCell>
        </Table.Header>

        <Table.Row>
          <Table.Cell collapsing>
            <Input size="mini" fuild type="date" />
          </Table.Cell>
          <Table.Cell>
            <Input size="mini" fuild type="date" />
          </Table.Cell>
          <Table.Cell>
            <Input size="mini" />
          </Table.Cell>
          <Table.Cell>
            <Input size="mini" type="number" />
          </Table.Cell>
          <Table.Cell>
            <Input size="mini" type="number" />
          </Table.Cell>
          <Table.Cell>
            <Input size="mini" />
          </Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <Button size="mini" icon="plus" color="green" />
          </Table.Cell>
        </Table.Row>

        {data.map((entry, i) => {
          return (
            <Table.Row c>
              <Table.Cell collapsing>
                {dayjs(entry.startDate).format('DD/MM/YYYY')}
              </Table.Cell>
              <Table.Cell>
                {dayjs(entry.endDate).format('DD/MM/YYYY')}
              </Table.Cell>
              <Table.Cell>{entry.purpose}</Table.Cell>
              <Table.Cell>{entry.startOdometer}</Table.Cell>
              <Table.Cell>{entry.endOdometer}</Table.Cell>
              <Table.Cell>
                {entry.business ? 'Business' : 'Personal'}
              </Table.Cell>
              <Table.Cell>
                {entry.endOdometer - entry.startOdometer} KM
              </Table.Cell>
              <Table.Cell>
                <Button icon="trash alternate" color="red" size="mini" />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table>
    </div>
  );
};

export default Logbook;

const data: logbookEntry[] = [
  {
    startDate: 1725631200000,
    endDate: 1725631200000,
    purpose: 'Uber',
    startOdometer: 172476,
    endOdometer: 172587,
    business: true,
  },
  {
    startDate: 1725544800000,
    endDate: 1725544800000,
    purpose: 'Uber',
    startOdometer: 172367,
    endOdometer: 172476,
    business: true,
  },
  {
    startDate: 1725544800000,
    endDate: 1725544800000,
    purpose: 'Uber',
    startOdometer: 172258,
    endOdometer: 172367,
    business: true,
  },
  {
    startDate: 1725458400000,
    endDate: 1725458400000,
    purpose: 'Uber',
    startOdometer: 172127,
    endOdometer: 172258,
    business: true,
  },
  {
    startDate: 1725458400000,
    endDate: 1725458400000,
    purpose: 'Uber',
    startOdometer: 172020,
    endOdometer: 172127,
    business: true,
  },
  {
    startDate: 1725372000000,
    endDate: 1725372000000,
    purpose: 'Uber',
    startOdometer: 171879,
    endOdometer: 172020,
    business: true,
  },
  {
    startDate: 1725285600000,
    endDate: 1725285600000,
    purpose: 'Uber',
    startOdometer: 171742,
    endOdometer: 171879,
    business: true,
  },
  {
    startDate: 1725199200000,
    endDate: 1725199200000,
    purpose: 'Personal',
    startOdometer: 171730,
    endOdometer: 171742,
    business: false,
  },
  {
    startDate: 1725026400000,
    endDate: 1725026400000,
    purpose: 'Uber',
    startOdometer: 171612,
    endOdometer: 171730,
    business: true,
  },
  {
    startDate: 2040472800000,
    endDate: 1724940000000,
    purpose: 'Uber',
    startOdometer: 171522,
    endOdometer: 171612,
    business: true,
  },
  {
    startDate: 1724940000000,
    endDate: 1724940000000,
    purpose: 'Uber',
    startOdometer: 171417,
    endOdometer: 171522,
    business: true,
  },
  {
    startDate: 1724853600000,
    endDate: 1724853600000,
    purpose: 'Uber',
    startOdometer: 171295,
    endOdometer: 171417,
    business: true,
  },
  {
    startDate: 1724853600000,
    endDate: 1724853600000,
    purpose: 'Uber',
    startOdometer: 171156,
    endOdometer: 171295,
    business: true,
  },
  {
    startDate: 1724767200000,
    endDate: 1724767200000,
    purpose: 'Uber',
    startOdometer: 171001,
    endOdometer: 171156,
    business: true,
  },
  {
    startDate: 1724680800000,
    endDate: 1724680800000,
    purpose: 'Uber',
    startOdometer: 170936,
    endOdometer: 171001,
    business: true,
  },
  {
    startDate: 1724680800000,
    endDate: 1724680800000,
    purpose: 'Uber',
    startOdometer: 170814,
    endOdometer: 170936,
    business: true,
  },
  {
    startDate: 1724594400000,
    endDate: 1724594400000,
    purpose: 'Uber',
    startOdometer: 170706,
    endOdometer: 170814,
    business: true,
  },
  {
    startDate: 1724421600000,
    endDate: 1724421600000,
    purpose: 'Uber',
    startOdometer: 170482,
    endOdometer: 170706,
    business: true,
  },
  {
    startDate: 1724335200000,
    endDate: 1724421600000,
    purpose: 'Uber',
    startOdometer: 170324,
    endOdometer: 170482,
    business: true,
  },
  {
    startDate: 1724335200000,
    endDate: 1724335200000,
    purpose: 'Uber',
    startOdometer: 170260,
    endOdometer: 170324,
    business: true,
  },
  {
    startDate: 1724248800000,
    endDate: 1724248800000,
    purpose: 'Uber',
    startOdometer: 170153,
    endOdometer: 170260,
    business: true,
  },
  {
    startDate: 1724248800000,
    endDate: 1724248800000,
    purpose: 'Uber',
    startOdometer: 170064,
    endOdometer: 170153,
    business: true,
  },
  {
    startDate: 1724162400000,
    endDate: 1724162400000,
    purpose: 'Uber',
    startOdometer: 169940,
    endOdometer: 170064,
    business: true,
  },
  {
    startDate: 1724076000000,
    endDate: 1724076000000,
    purpose: 'Personal',
    startOdometer: 169910,
    endOdometer: 169940,
    business: false,
  },
  {
    startDate: 1724076000000,
    endDate: 1724076000000,
    purpose: 'Uber',
    startOdometer: 169792,
    endOdometer: 169910,
    business: true,
  },
  {
    startDate: 1723989600000,
    endDate: 1723989600000,
    purpose: 'Uber',
    startOdometer: 169682,
    endOdometer: 169792,
    business: true,
  },
  {
    startDate: 1723644000000,
    endDate: 1723644000000,
    purpose: 'Uber',
    startOdometer: 169471,
    endOdometer: 169682,
    business: true,
  },
  {
    startDate: 1723212000000,
    endDate: 1723212000000,
    purpose: 'Uber',
    startOdometer: 169132,
    endOdometer: 169325,
    business: true,
  },
  {
    startDate: 1723125600000,
    endDate: 1723125600000,
    purpose: 'Uber',
    startOdometer: 169007,
    endOdometer: 169132,
    business: true,
  },
  {
    startDate: 1723039200000,
    endDate: 1723039200000,
    purpose: 'Uber',
    startOdometer: 168881,
    endOdometer: 169007,
    business: true,
  },
  {
    startDate: 1722952800000,
    endDate: 1722952800000,
    purpose: 'Uber',
    startOdometer: 168791,
    endOdometer: 168881,
    business: true,
  },
  {
    startDate: 1722866400000,
    endDate: 1722866400000,
    purpose: 'Uber',
    startOdometer: 168653,
    endOdometer: 168791,
    business: true,
  },
  {
    startDate: 1722693600000,
    endDate: 1722693600000,
    purpose: 'Personal',
    startOdometer: 168636,
    endOdometer: 168653,
    business: false,
  },
  {
    startDate: 1722607200000,
    endDate: 1722693600000,
    purpose: 'Uber',
    startOdometer: 168281,
    endOdometer: 168636,
    business: true,
  },
  {
    startDate: 1722520800000,
    endDate: 1722520800000,
    purpose: 'Uber',
    startOdometer: 168101,
    endOdometer: 168281,
    business: true,
  },
  {
    startDate: 1722434400000,
    endDate: 1711890000000,
    purpose: 'Uber',
    startOdometer: 167997,
    endOdometer: 168101,
    business: true,
  },
  {
    startDate: 1722434400000,
    endDate: 1722434400000,
    purpose: 'Uber',
    startOdometer: 167850,
    endOdometer: 167997,
    business: true,
  },
  {
    startDate: 1722261600000,
    endDate: 1722261600000,
    purpose: 'Uber',
    startOdometer: 167691,
    endOdometer: 167850,
    business: true,
  },
  {
    startDate: 1722175200000,
    endDate: 1722175200000,
    purpose: 'Personal',
    startOdometer: 167687,
    endOdometer: 167691,
    business: false,
  },
  {
    startDate: 1722088800000,
    endDate: 1722088800000,
    purpose: 'Personal',
    startOdometer: 167653,
    endOdometer: 167687,
    business: false,
  },
  {
    startDate: 1722002400000,
    endDate: 1722088800000,
    purpose: 'Uber',
    startOdometer: 167379,
    endOdometer: 167653,
    business: true,
  },
  {
    startDate: 1722002400000,
    endDate: 1722002400000,
    purpose: 'Personal',
    startOdometer: 167359,
    endOdometer: 167379,
    business: false,
  },
  {
    startDate: 1721916000000,
    endDate: 1722002400000,
    purpose: 'Uber',
    startOdometer: 167180,
    endOdometer: 167359,
    business: true,
  },
  {
    startDate: 1721829600000,
    endDate: 1721829600000,
    purpose: 'Personal',
    startOdometer: 167167,
    endOdometer: 167180,
    business: false,
  },
  {
    startDate: 1721829600000,
    endDate: 1721829600000,
    purpose: 'Uber',
    startOdometer: 166977,
    endOdometer: 167167,
    business: true,
  },
  {
    startDate: 1721656800000,
    endDate: 1721656800000,
    purpose: 'Uber',
    startOdometer: 166892,
    endOdometer: 166977,
    business: true,
  },
  {
    startDate: 1721570400000,
    endDate: 1721570400000,
    purpose: 'Personal',
    startOdometer: 166865,
    endOdometer: 166892,
    business: false,
  },
  {
    startDate: 1721311200000,
    endDate: 1721311200000,
    purpose: 'Uber',
    startOdometer: 166740,
    endOdometer: 166865,
    business: true,
  },
  {
    startDate: 1721311200000,
    endDate: 1721311200000,
    purpose: 'Personal',
    startOdometer: 166601,
    endOdometer: 166740,
    business: false,
  },
  {
    startDate: 1721224800000,
    endDate: 1721224800000,
    purpose: 'Uber',
    startOdometer: 166447,
    endOdometer: 166601,
    business: true,
  },
  {
    startDate: 1721224800000,
    endDate: 1721224800000,
    purpose: 'Personal',
    startOdometer: 166368,
    endOdometer: 166447,
    business: false,
  },
  {
    startDate: 1721138400000,
    endDate: 1721138400000,
    purpose: 'Personal',
    startOdometer: 166322,
    endOdometer: 166368,
    business: false,
  },
  {
    startDate: 1721052000000,
    endDate: 1721052000000,
    purpose: 'Uber',
    startOdometer: 166249,
    endOdometer: 166322,
    business: true,
  },
  {
    startDate: 1720879200000,
    endDate: 1720879200000,
    purpose: 'Personal',
    startOdometer: 166186,
    endOdometer: 166249,
    business: false,
  },
  {
    startDate: 1720792800000,
    endDate: 1720792800000,
    purpose: 'Personal',
    startOdometer: 166147,
    endOdometer: 166186,
    business: false,
  },
  {
    startDate: 1720706400000,
    endDate: 1720706400000,
    purpose: 'Uber',
    startOdometer: 166043,
    endOdometer: 166147,
    business: true,
  },
  {
    startDate: 1720620000000,
    endDate: 1720620000000,
    purpose: 'Uber',
    startOdometer: 165919,
    endOdometer: 166043,
    business: true,
  },
  {
    startDate: 1720447200000,
    endDate: 1720447200000,
    purpose: 'Personal',
    startOdometer: 165897,
    endOdometer: 165919,
    business: false,
  },
  {
    startDate: 1720360800000,
    endDate: 1717768800000,
    purpose: 'Uber',
    startOdometer: 165814,
    endOdometer: 165897,
    business: true,
  },
  {
    startDate: 1720274400000,
    endDate: 1720274400000,
    purpose: 'Personal',
    startOdometer: 165786,
    endOdometer: 165815,
    business: false,
  },
  {
    startDate: 1720188000000,
    endDate: 1720274400000,
    purpose: 'Uber',
    startOdometer: 165581,
    endOdometer: 165786,
    business: true,
  },
  {
    startDate: 1720188000000,
    endDate: 1720188000000,
    purpose: 'Personal',
    startOdometer: 165561,
    endOdometer: 165581,
    business: false,
  },
  {
    startDate: 1720101600000,
    endDate: 1720188000000,
    purpose: 'Uber',
    startOdometer: 165306,
    endOdometer: 165561,
    business: true,
  },
  {
    startDate: 1720101600000,
    endDate: 1720101600000,
    purpose: 'Personal',
    startOdometer: 165301,
    endOdometer: 165306,
    business: false,
  },
  {
    startDate: 1720015200000,
    endDate: 1720015200000,
    purpose: 'Uber',
    startOdometer: 165123,
    endOdometer: 165301,
    business: true,
  },
];
