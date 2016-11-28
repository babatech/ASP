-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2016 at 06:38 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asp`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatgroups`
--

CREATE TABLE `chatgroups` (
  `chatgroup_id` int(11) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `group_city` varchar(50) NOT NULL,
  `group_state` varchar(50) NOT NULL,
  `group_country` varchar(50) NOT NULL,
  `group_ondate` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `cell` varchar(20) DEFAULT NULL,
  `adress` varchar(150) DEFAULT NULL,
  `ondate` date DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `country` int(20) DEFAULT NULL,
  `country_code` int(3) DEFAULT NULL,
  `updateon` date DEFAULT NULL,
  `longitude` decimal(10,0) DEFAULT NULL,
  `latitude` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `cell`, `adress`, `ondate`, `city`, `country`, `country_code`, `updateon`, `longitude`, `latitude`) VALUES
(1, 'dani_softmaster786@hotmail.com', NULL, NULL, '10154805215114783', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'danitest@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),

(3, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(4, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(5, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(6, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(8, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(9, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(10, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(11, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(12, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(13, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(14, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(15, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(16, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(17, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(18, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(19, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(20, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(21, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(22, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(23, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(24, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(25, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(26, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(27, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(28, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(29, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(30, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(31, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(32, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(33, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(34, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(35, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(36, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(37, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(38, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(39, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(40, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(41, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(42, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(43, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(44, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(45, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(46, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(47, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(48, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(49, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(50, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(51, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(52, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(53, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(54, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(55, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(56, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(57, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(58, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(59, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(60, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(61, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(62, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(63, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(64, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(65, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(66, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(67, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(68, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(69, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(70, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(71, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(72, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(73, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(74, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(75, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(76, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(77, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(78, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(79, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(80, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(81, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(82, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(83, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(84, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(85, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(86, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(87, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(88, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(89, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(90, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(91, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(92, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(93, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(94, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(95, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(96, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(97, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(98, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(99, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(100, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(101, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(102, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(103, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(104, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(105, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(106, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(107, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(108, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(109, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(110, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(111, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(112, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(113, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(114, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(115, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(116, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(117, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(118, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(119, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(120, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(121, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(122, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(123, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(124, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(125, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(126, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(127, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(128, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(129, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(130, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(131, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(132, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(133, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(134, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(135, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(136, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(137, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(138, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(139, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(140, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(141, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(142, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL)

,

(143, 'ali', NULL, NULL, NULL, '03333578348', 'near gulshan-e-maymar', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatgroups`
--
ALTER TABLE `chatgroups`
  ADD PRIMARY KEY (`chatgroup_id`);

--
-- Indexes for table `users`
--




ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);




--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--























ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
