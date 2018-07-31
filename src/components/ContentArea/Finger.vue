<template>
  <div
    class="finger image"
    :class="[{pickup: finger.pickup}]"
    :style="background(finger.images[current])"

    @click="show=true"
  >
    <div class="pickup" v-if="finger.pickup">
      Pick Up
    </div>
    <div class="description">
      <img :src="finger.leader.img" :alt="finger.leader.name">
      <div class="leader-name"><span>{{ finger.leader.name }}</span></div>
      <h1>{{ finger.title }}</h1>
      <div class="level">
        <font-awesome-icon class="star" :color="star(1, finger.level)" icon="star"/>
        <font-awesome-icon class="star" :color="star(2, finger.level)" icon="star"/>
        <font-awesome-icon class="star" :color="star(3, finger.level)" icon="star"/>
      </div>
      <div class="part-list">
        <div class="part" v-for="name in finger.part">{{ name }}</div>
      </div>
    </div>
    <front-panel class="finger-info" v-if="show">
      <img class="preview" :src="finger.images[current]">
      <div class="container-fluid">
        <div class="close-button" @click.stop.prevent="show=false">
          <font-awesome-icon icon="times" color="white"/>
        </div>
        <div class="thumbnails">
          <img
            v-for="(image, i) in finger.images"
            :src="image"
            class="thumbnail"
            :class="[{active: current === i}]"
            @click="current = i"
          >
        </div>
        <h1 class="title">{{ finger.title }}</h1>
        <div class="status content-box">
          <div class="part-list">
            <div class="part" v-for="name in finger.part">{{ name }}</div>
          </div>
          <div class="level">
            <span class="level-text">難易度：<span>{{ level(finger.level) }}</span></span>
            <font-awesome-icon class="star" :color="star(1, finger.level)" icon="star"/>
            <font-awesome-icon class="star" :color="star(2, finger.level)" icon="star"/>
            <font-awesome-icon class="star" :color="star(3, finger.level)" icon="star"/>
          </div>
        </div>
        <div class="leader-comment content-box">
          <h1>リーダーのコメント</h1>
          <div class="content">
            <div class="leader">
              <img :src="finger.leader.img" :alt="finger.leader.name">
              <div class="leader-name">{{ finger.leader.name }}</div>
            </div>
            <div class="comment">
              <template v-for="text in finger.leader_comment.split('\n')">
                {{ text }}<br>
              </template>
            </div>
          </div>
        </div>
        <div class="basic-info content-box">
          <h1>基本情報</h1>
          <div class="row">
            <div class="col-5 label">活動ステータス：</div>
            <div class="col-7 text">{{ finger.status }}</div>
          </div>
          <div class="row">
            <div class="col-5 label">バンド方針：</div>
            <div class="col-7 text">{{ finger.purpose }}</div>
          </div>
          <div class="row">
            <div class="col-5 label">エリア：</div>
            <div class="col-7 text">{{ finger.area }}</div>
          </div>
          <div class="row">
            <div class="col-5 label">練習日程：</div>
            <div class="col-7 text">{{ finger.schedule }}</div>
          </div>
          <div class="row">
            <div class="col-5 label">参加費用：</div>
            <div class="col-7 text">{{ finger.fee }}</div>
          </div>
          <div class="row">
            <div class="col-5 label">課題曲：</div>
            <div class="col-7 text">{{ finger.repertoire }}</div>
          </div>
        </div>
        <div class="events content-box">
          <h1>参加予定イベント</h1>
          <div class="content">
            <div v-for="event in finger.events" class="event">
              <img :src="event.img" :alt="event.name">
              <p>{{ event.name }}</p>
              <p>{{ event.date }}</p>
            </div>
          </div>
        </div>
        <div class="member_comments content-box">
          <h1>メンバーのコメント</h1>
          <div class="content">
            <div v-for="member in finger.member_comments" class="member_comment">
              <div class="thumbnail">
                <img :src="member.img" :alt="member.name">
              </div>
              <div class="comment">
                <span class="part">{{ member.part }}で参加</span>
                <span class="name">{{ member.name }}</span>
                <p>
                  <template v-for="text in member.comment.split('\n')">
                    {{ text }}<br>
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </front-panel>
  </div>
</template>

<script>
import FrontPanel from '../FrontPanel'

export default {
  components: {FrontPanel},

  name: 'Finger',

  props: {
    finger: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      show: false,
      current: 0
    }
  },

  methods: {
    background (img) {
      return {
        'background-image': `url(${img})`,
        'background-size': 'cover'
      }
    },

    level (level) {
      if (level === 1) return '初心者'
      if (level === 2) return '中級者'
      if (level === 3) return '上級者'
      return '未設定'
    },

    star (position, level) {
      return position <= level ? '#2bad90' : '#888'
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  position: relative;
  width: 100%;

  &:before {
    content: "　　";
    display: block;
    padding-top: 66%;
  }

  animation: all 1s ease;
}

.content-box {
  margin-top: 15px;
  padding-bottom: 15px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
}

.level {
  font-size: 12px;

  > .star {
    font-size: 14px;
    margin-right: 3px;
  }
}

.finger-info {
  position: relative;
  color: #3e3a39;

  .close-button {
    height: 30px;
    width: 30px;
    background: rgba(0, 0, 0, 0.36);
    position: absolute;
    right: 15px;
    top: 15px;
    text-align: center;
    border-radius: 50%;
    padding-top: 3px;
    cursor: pointer;
    z-index: 10001
  }

  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  img.preview {
    width: 100%;
  }

  .thumbnails {
    margin-top: 15px;

    .thumbnail {
      position: relative;
      width: 50px;
      height: 50px;
      padding: 2px;
      margin-right: 5px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid transparent;

      &.active {
        border: 3px solid #2bad90;
      }
    }
  }

  .title {
    margin-top: 15px;
    font-size: 20px;
    font-weight: bold;
  }

  .status {
    display: flex;
    justify-content: space-between;

    .level-text {
      display: inline-block;
      margin-right: 5px;

      span {
        font-weight: bold;
      }
    }

    .part {
      border: 1px solid #e5e5e5;
    }
  }

  .leader-comment {

    .content {
      margin-top: 15px;

      display: flex;
      .leader {
        min-width: 90px;
        img {
          margin-left: 15px;
          width: 60px;
          border-radius: 50%;
        }

        .leader-name {
          margin-top: 6px;
          font-size: 12px;
          width: 100%;
          text-align: center;
        }
      }
      .comment {
        flex-grow: 1;
        font-size: 13px;
      }
    }
  }

  .basic-info {
    font-size: 13px;

    .row {
      .label {
        color: #bbb;
      }

      margin-bottom: 8px;
    }
  }

  .events {
    .content {
      margin: 0 -15px;
      display: flex;
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      .event {
        &:first-child {
          padding-left: 15px;
        }

        &:last-child {
          padding-right: 15px;
        }

        img {
          width: 70px;
          margin-bottom: 5px;
        }
        margin-right: 10px;
        p {
          font-size: 10px;

          margin: 0;
          text-align: center;
        }
      }
    }
  }

  .member_comments {
    .content {
      .member_comment {
        display: flex;
        margin-bottom: 15px;

        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
        }

        .comment {
          margin-left: 10px;
          background: #efefef;
          padding: 10px;
          width: 100%;
          border-radius: 5px;

          font-size: 13px;
          .part {
            color: #2bad90;
          }

          .name {
            margin-left: 2em;
            font-weight: bold;
          }

          p {
            margin: 0;
            margin-top: 3px;
          }
        }
      }
    }
  }
}

.finger {
  .pickup {
    position: absolute;
    top: 10px;
    right: 15px;

    font-size: 12px;
    color: white;
    background-color: #f39700;
    padding: 1px 6px;
    border-radius: 3px;
  }

  .description {
    position: absolute;
    height: 80px;

    img {
      position: absolute;
      top: 10px;
      left: 20px;
      width: 40px;
      border-radius: 50%;
    }

    .leader-name {
      font-size: 10px;
      position: absolute;
      top: 55px;
      width: 80px;
      text-align: center;

      > span {
        font-weight: bold;
      }
    }

    h1 {
      position: absolute;
      font-size: 13px;
      font-weight: bold;

      top: 20px;
      left: 90px;
      width: calc(100% - 100px);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .level {
      position: absolute;
      bottom: 10px;
      left: 90px;
    }

    .part-list {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    left: 0;
    bottom: 0;
    right: 0;

    background: rgba(255, 255, 255, 0.76);
  }

  &.pickup {
    .description {
      background: rgba(242, 208, 151, 0.76);
    }
  }
}

.part-list {
  .part {
    background-color: white;
    color: #2bad90;
    display: inline-block;
    padding: 1px 10px;
    border-radius: 4px;
    font-size: 10px;
    margin-right: 5px;
  }
}
</style>