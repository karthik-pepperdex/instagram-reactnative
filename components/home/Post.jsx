import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTtop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>

    <View>
      <TouchableOpacity>
        <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const PostFooter = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[0].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[1].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[2].imageUrl}
        />
      </View>

      <View style={styles.rightFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[3].imageUrl}
        />
      </View>
    </View>
  );
};

const Icon = ({ imgStyle, imgUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#E1306C",
  },

  footerIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    top: 9,
  },

  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },

  rightFooterIconsContainer: {},
});

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: require("../../assets/post-footer-icons/heart-icon.png"),
    likedImageUrl: require("../../assets/post-footer-icons/heart-filled-icon.png"),
  },

  {
    name: "Comment",
    imageUrl: require("../../assets/post-footer-icons/comment-icon.png"),
  },

  {
    name: "Share",
    imageUrl: require("../../assets/post-footer-icons/share-icon.png"),
  },

  {
    name: "Save",
    imageUrl: require("../../assets/post-footer-icons/save-icon.png"),
  },
];

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 15, cursor: "pointer" }}>
      <TouchableOpacity>
        <Text style={{ color: "white", fontWeight: "600" }}>
          {post.likes.toLocaleString("en")} likes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <TouchableOpacity>
          <Text style={{ fontWeight: "800", color: "white" }}>{post.user}</Text>
        </TouchableOpacity>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentsSection = ({ post }) => {
  return (
    <View style={{ cursor: "pointer", marginTop: 5 }}>
      {!!post.comments.length && (
        <Text style={{ color: "gray" }}>
          View{post.comments.length > 1 ? " all" : ""} {post.comments.length}
          {post.comments.length > 1 ? " comments" : " comment"}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => {
  return (
    <>
      {post.comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "600", cursor: "pointer" }}>
              {comment.user}{" "}
            </Text>
            {comment.comment}
          </Text>
        </View>
      ))}
    </>
  );
};

export default Post;
