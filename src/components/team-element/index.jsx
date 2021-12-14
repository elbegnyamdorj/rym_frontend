import React, { Component } from "react";

export class TeamElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4 class="border-bottom my-5 pb-1">1-Р БАГ</h4>
        <select id="inputState" class="form-control">
          <option selected>Оюутан нэмэх...</option>
          <option>...</option>
          <option>...</option>
        </select>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Оюутны нэр</th>
              <th scope="col">Оюутны код</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td> first_name </td>
              <td> student_id </td>
              <td>
                <button type="button" class="btn btn-sm">
                  хасах
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TeamElement;
