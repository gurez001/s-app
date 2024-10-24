import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { styled } from "nativewind";
import { useDispatch, useSelector } from "react-redux";
import { get_all_offer_slider } from "../../../api/offersapi";
import Loader from "../loader/Loader";
import { getSiteURL } from "../../../lib/get-site-url";

const baseurl = getSiteURL();
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function OfferSlider() {
  const dispatch = useDispatch();
  const { loading, offer_slider, error } = useSelector(
    (state) => state.offer_slider
  );

  useEffect(() => {
    dispatch(get_all_offer_slider());
  }, [dispatch]);

  if (loading && offer_slider.length === 0) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Swiper
        autoplay={true}
        autoplayTimeout={3}
        showsButtons={false} // Disable buttons if not needed
        style={styles.wrapper}
        dotStyle={styles.dot} // Optional: Customize dot styles
        activeDotStyle={styles.activeDot} // Optional: Customize active dot styles
      >
        {offer_slider && offer_slider.length > 0 ? (
          offer_slider.map((item, i) => (
            <View key={i} style={styles.slide}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={
                  item.image
                    ? { uri: `${baseurl}/${item.image.path}` }
                    : require("../../../../assets/images/logo.png")
                }
              />
            </View>
          ))
        ) : (
          <Text style={styles.noOffersText}>No offers available</Text>
        )}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    height: 150, // Adjust height as needed
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    bottom: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  noOffersText: {
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  dot: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 10,
    height: 10,
  },
  activeDot: {
    backgroundColor: "#000",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
