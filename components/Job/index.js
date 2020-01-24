import { Badge, BlockItem, Container, ItemSubtitle, ItemDescription, ItemTitle, ItemWrap } from './style';

export default function Job(props) {
  return (
    <Container>
      <ItemWrap>
        <BlockItem>
          <ItemTitle>Software Engineering Intern</ItemTitle>
          <ItemSubtitle>IGT</ItemSubtitle>
          <ItemSubtitle><i>September 2019 - Present</i></ItemSubtitle>
          <ItemSubtitle><i>Reno, NV</i></ItemSubtitle>
          <ItemDescription>
            Developed a full-stack application using Angular, Node, TypeScript and MS SQL Server.
            {'\n'}Designed custom API routes and classes in Express.
            {'\n'}Wrote stored procedures in SQL to interact with the API.
          </ItemDescription>
        </BlockItem>
      </ItemWrap>
      <ItemWrap>
        <BlockItem>
          <ItemTitle>BI Developer Intern</ItemTitle>
          <ItemSubtitle>Iridium Technology</ItemSubtitle>
          <ItemSubtitle><i>Summer 2019</i></ItemSubtitle>
          <ItemSubtitle><i>Reno, NV</i></ItemSubtitle>
          <ItemDescription>
            Wrote SQL stored procedures to aggregate data according to client customizations.
            {'\n'}Designed custom dashboards using SQL and HTML/CSS.
            {'\n'}Used Microsoft SQL Server and C# to modify existing data by use of queries and functions.
          </ItemDescription>
        </BlockItem>
      </ItemWrap>
    </Container>
  )
}
