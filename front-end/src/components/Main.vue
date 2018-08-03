<template>
  <div>
    <Header />
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Email Service</span>
    </nav>

    <div class="container">

    <ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="pills-sendmail-tab" data-toggle="pill"
            href="#pills-sendmail" role="tab" aria-controls="pills-upload" aria-selected="true"
            @click="clearValue()">New Email</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-history-tab" data-toggle="pill" href="#pills-history"
            role="tab" aria-controls="pills-verify" aria-selected="false" @click="loadHistory()">
            History</a>
        </li>
    </ul>

    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-sendmail" role="tabpanel"
        aria-labelledby="pills-sendmail-tab">
            <div class="row">
                <div class="col-md-12">
                    <form @submit.prevent="sendmail">
                        <div class="form-group" align="left">
                            <label for="">To:</label>
                            <input type="email" required class="form-control"
                            placeholder="eg. chanon.dpk@gmail.com" v-model="model.recipient">
                        </div>

                        <div class="form-group" align="left">
                            <label for="">Subject:</label>
                            <input type="text" required class="form-control"
                            placeholder="Enter Subject" v-model="model.subject">
                        </div>

                        <div class="form-group" align="left">
                            <label for="">Content:</label>
                            <textarea rows="4" cols="50" required class="form-control"
                            placeholder="Enter Content" v-model="model.content" ></textarea>
                        </div>

                        <div class="form-group" align="center">
                            <button class="btn btn-success btn-light btn-large" id="send-button">
                            {{send}}</button>
                        </div></form>
                </div>
            </div>
            <div id="mail-status" class="modal fade">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Delivery Result</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body" align="left">
                        <h6>{{deliveryStatus}}</h6>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Close</button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        <div class="tab-pane fade" id="pills-history" role="tabpanel"
        aria-labelledby="pills-history-tab">
            <div class="row">
              <div class="col-md-12">
                  <h3>History</h3>
                  <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">To</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  /* eslint-disable */
                    <template v-for="mail in model.history">
                      <tr>
                        <th scope="row" :key="mail.id">{{ mail.datetime }}</th>
                        <td>{{ mail.recipient }}</td>
                        <td>{{ mail.subject }}</td>
                        <td>{{ mail.result}} </td>
                        <td><button class="btn btn-success btn-large" @click="showMail(mail)">
                        View</button></td>
                      </tr>
                    </template>
                  </tbody>
                </table>
                <div id="mail-details" class="modal fade">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Subject: {{model.subject}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body" align="left">
                        <h6>To:{{model.recipient}}</h6>
                        <p>{{ model.content }}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Main',
  data() {
    return {
      model: {
        recipient: '',
        subject: '',
        content: '',
        history: [],
      },
      deliveryStatus: '',
      send: 'Send',
    };
  },
  methods: {
    clearValue: function clearValue() {
      this.model.recipient = '';
      this.model.subject = '';
      this.model.content = '';
      this.send = 'Send';
    },
    async sendmail() {
      this.send = 'Sending';
      const formData = new FormData();
      formData.append('subject', this.model.subject);
      formData.append('recipient', this.model.recipient);
      formData.append('content', this.model.content);
      const result = await axios.post('http://localhost:3128/sendmail', formData);
      if (result.data.status === 'success') {
        this.deliveryStatus = `Email sent to ${this.model.recipient}`;
      } else {
        this.deliveryStatus = `Unable to send email to ${this.model.recipient}`;
      }
      this.clearValue();
      $('#mail-status').modal('show');
    },
    loadHistory() {
      axios.get('http://localhost:3128/history').then((res) => {
        this.model.history = res.data.history;
      });
    },
    showMail: function showMail(mail) {
      this.model.recipient = mail.recipient;
      this.model.subject = mail.subject;
      this.model.content = mail.content;
      $('#mail-details').modal('show');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #426cb9;
}
</style>
