import Layout from '../components/MyLayout.js';
import MyResume from '../components/MyResume';
import { Document } from 'react-pdf';

export default function Resume() {
  return (
    <Layout>
      <MyResume/>
    </Layout>
  )
}
